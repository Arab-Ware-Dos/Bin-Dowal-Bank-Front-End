import fs from 'fs';
import path from 'path';

const COMPONENT_PATHS = [
  'components/customer-service/complaints-page-content.tsx',
  'components/customer-service/service-request-page-content.tsx',
  'components/customer-service/bank-cards-request-page-content.tsx',
  'components/contact/contact-page-content.tsx'
];

function runDriftTest() {
  console.log('Starting Production Form State Drift Test...');
  let hasErrors = false;

  for (const componentPath of COMPONENT_PATHS) {
    const fullPath = path.resolve(process.cwd(), componentPath);
    
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ File not found: ${componentPath}`);
      hasErrors = true;
      continue;
    }

    const content = fs.readFileSync(fullPath, 'utf8');

    // 1. Verify FormUnavailableNotice is imported
    if (!content.includes('FormUnavailableNotice')) {
      console.error(`❌ FormUnavailableNotice not imported in: ${componentPath}`);
      hasErrors = true;
    }

    // 2. Verify fake success state is removed
    if (content.includes('setFormSubmitted') || content.includes('formSubmitted')) {
      console.error(`❌ Fake formSubmitted state found in: ${componentPath}`);
      hasErrors = true;
    }

    // 3. Verify no HTTP or local storage leakage
    const blockedKeywords = ['fetch(', 'axios', 'localStorage', 'sessionStorage', 'console.log(formData)', 'form.reset()', 'toast.success'];
    for (const keyword of blockedKeywords) {
      if (content.includes(keyword)) {
        console.error(`❌ Blocked keyword "${keyword}" found in: ${componentPath}`);
        hasErrors = true;
      }
    }

    // 4. Verify handleSubmit only does preventDefault
    const handleSubmitRegex = /const handleSubmit = \(e: React\.FormEvent\) => \{\s*e\.preventDefault\(\)\s*\}?/g;
    if (!handleSubmitRegex.test(content)) {
        if (content.includes('handleSubmit')) {
            console.error(`❌ handleSubmit is either missing or contains unauthorized logic (must only contain e.preventDefault()) in: ${componentPath}`);
            hasErrors = true;
        }
    }

    // 5. Verify fields are functionally disabled (not just opacity)
    if (!content.includes('disabled') && !content.includes('disabled={true}')) {
      console.error(`❌ Form fields do not appear to be functionally disabled in: ${componentPath}`);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.error('\n❌ Production Form State Drift Test FAILED. Forms are not safely disabled.');
    process.exit(1);
  }

  console.log('\n✅ Production Form State Drift Test PASSED. All targeted forms are safely disabled.');
}

runDriftTest();
