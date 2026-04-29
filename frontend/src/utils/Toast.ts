import { toast } from "react-toastify";

export const notifySuccess = (msg: any) => toast.success(msg);
export const notifyError = (msg: any) => toast.error(msg);
export const notifyLoading = (msg = "Loading...") => toast.loading(msg);

export const updateToSuccess = (id: any, msg: any) =>
  toast.update(id, {
    render: msg,
    type: "success",
    isLoading: false,
    autoClose: 3000,
  });

export const updateToError = (id: any, msg: any) =>
  toast.update(id, {
    render: msg,
    type: "error",
    isLoading: false,
    autoClose: 3000,
  });
