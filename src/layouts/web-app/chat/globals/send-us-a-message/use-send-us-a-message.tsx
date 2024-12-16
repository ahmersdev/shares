import { usePostSendMessageMutation } from "@/services/web-app/chat";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { errorSnackbar } from "@/utils/api";
import { IApiErrorResponse } from "@/interfaces";

export default function useSendUsAMessage() {
  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        message: Yup.string().required("Message is Required"),
      })
    ),
    defaultValues: { message: "" },
  });

  const { handleSubmit, reset } = methods;

  const [postSendMessageTrigger] = usePostSendMessageMutation();

  const onSubmit = async (data: { message: string }) => {
    try {
      await postSendMessageTrigger({
        message: data.message,
      }).unwrap();
      reset();
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
  };
}
