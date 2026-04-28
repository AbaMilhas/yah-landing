"use client";
import { useCallback, useState } from "react";

type ToastType = "success" | "error";

export interface ToastState {
  message: string;
  type: ToastType;
  visible: boolean;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    message: "",
    type: "success",
    visible: false,
  });

  const show = useCallback((message: string, type: ToastType = "success") => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4000);
  }, []);

  return { toast, show };
}

export function Toast({ toast }: { toast: ToastState }) {
  if (!toast.visible) return null;
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-2xl transition-all ${
        toast.type === "success" ? "bg-teal-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      <span>{toast.type === "success" ? "✓" : "✕"}</span>
      {toast.message}
    </div>
  );
}
