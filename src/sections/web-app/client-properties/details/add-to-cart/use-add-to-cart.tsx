import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { IAddToCartProps } from "./add-to-cart.interface";
import { usePostAddPropertyToCardFromPropertyMutation } from "@/services/web-app/properties";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { IApiErrorResponse } from "@/interfaces";

export default function useAddToCart(props: IAddToCartProps) {
  const { propertyId } = props;

  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        amount: Yup.number()
          .positive("Must be above 0")
          .min(1000, "Amount must be at least 1000")
          .typeError("Must be a Number")
          .required("Amount is Required"),
      })
    ),
    defaultValues: { amount: undefined },
  });

  const { handleSubmit } = methods;

  const [
    postAddPropertyToCardFromPropertyTrigger,
    postAddPropertyToCardFromPropertyStatus,
  ] = usePostAddPropertyToCardFromPropertyMutation();

  const onSubmit = async (data: { amount: number }) => {
    try {
      const res = await postAddPropertyToCardFromPropertyTrigger({
        body: data,
        propertyId,
      }).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Property Added to Cart Successfully!");
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    postAddPropertyToCardFromPropertyStatus,
  };
}
