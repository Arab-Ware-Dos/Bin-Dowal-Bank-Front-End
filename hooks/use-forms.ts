"use client";

import { useState, useEffect, useCallback } from "react";
import { BankFormItem } from "@/types/forms";
import { getBankForms } from "@/services/forms-service";

export function useForms(locale?: string) {
  const [forms, setForms] = useState<BankFormItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchForms = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const data = await getBankForms(locale);
      setForms(data);
    } catch (err) {
      console.error("[useForms] Failed to load forms:", err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [locale]);

  useEffect(() => {
    fetchForms();
  }, [fetchForms]);

  return {
    forms,
    isLoading,
    isError,
    refetch: fetchForms,
  };
}
