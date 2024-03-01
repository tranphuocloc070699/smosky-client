

interface IToast {
  title: string;
  description?: string;
}

const TIMEOUT= 0;

export const useNotification = (useToast : any) => {
    const toast = useToast();
  return {
    Success:(prop: IToast) => toast.add({
        title: prop.title,
        timeout: TIMEOUT,
        icon: "i-heroicons-check-circle",
        color: "emerald",
        ...(prop.description && { description: prop.description }),
      }),
      Info:(prop: IToast) => toast.add({
        title: prop.title,
        timeout: TIMEOUT,
        icon: "i-heroicons-information-circle",
        color: "blue",
        ...(prop.description && { description: prop.description }),
      }),
      Warning:(prop: IToast) => toast.add({
        title: prop.title,
        timeout: TIMEOUT,
        icon: "i-heroicons-exclamation-triangle",
        color: "yellow",
        ...(prop.description && { description: prop.description }),
      }),
      Danger:(prop: IToast) => toast.add({
        title: prop.title,
        timeout: TIMEOUT,
        icon: "i-heroicons-face-frown",
        color: "red",
        ...(prop.description && { description: prop.description }),
      }),
  }
};
