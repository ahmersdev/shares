import { Box, InputAdornment, LinearProgress, Typography } from "@mui/material";
import { CustomTooltip } from "@/components/custom-tooltip";
import { ErrorOutlineRounded } from "@mui/icons-material";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import { IAddToCartProps } from "./add-to-cart.interface";
import useAddToCart from "./use-add-to-cart";

export default function AddToCart(props: IAddToCartProps) {
  const { dataToDisplay } = props;

  const {
    methods,
    handleSubmit,
    onSubmit,
    postAddPropertyToCardFromPropertyStatus,
  } = useAddToCart(props);

  return (
    <Box
      border={1}
      borderColor={"text.stroke"}
      bgcolor={"grey.50"}
      borderRadius={3}
      p={2.4}
    >
      <Typography variant={"caption"} component={"p"} textAlign={"center"}>
        Property price
      </Typography>
      <Typography
        variant={"h5"}
        color={"primary.main"}
        textAlign={"center"}
        mb={3.5}
      >
        USD{" "}
        {dataToDisplay.price
          ? new Intl.NumberFormat("en-US").format(dataToDisplay.price)
          : "-"}
      </Typography>

      <LinearProgress
        variant={"determinate"}
        value={dataToDisplay.progress ? dataToDisplay.progress : 0}
        color={"primary"}
        sx={{
          borderRadius: 1.5,
          height: 6,
          backgroundColor: "primary.5",
          "& .MuiLinearProgress-bar1Determinate": {
            borderRadius: "inherit",
          },
        }}
      />

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        color={"primary.main"}
        gap={1}
      >
        <Typography variant={"body2"} fontWeight={500}>
          {dataToDisplay.progress ? dataToDisplay.progress.toFixed(2) : "0"}%
        </Typography>
        <Typography variant={"body2"} fontWeight={500}>
          {dataToDisplay.remainingShares ?? "0"} Shares Left
        </Typography>
      </Box>

      <Typography variant={"caption"} component={"p"} mt={2.4}>
        <Typography variant={"caption"} fontWeight={600} component={"span"}>
          {dataToDisplay.investorsCount ?? "0"}
        </Typography>{" "}
        Investors
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"column"}
        bgcolor={"text.headingLight"}
        borderRadius={2}
        p={1.2}
        gap={1.2}
        my={2.4}
      >
        {[
          {
            label: "Return through development period",
            value: "8%",
            tooltip: "Return through development period",
          },
          {
            label: "Exit by completion",
            value: `${dataToDisplay.minAnnualROI ?? "-"}-${
              dataToDisplay.maxAnnualROI ?? "-"
            }%`,
            tooltip: "Exit by completion",
          },
          {
            label: "3-5 year total return",
            value: `${dataToDisplay.yearlyInvReturn ?? "-"}%`,
            tooltip: "3-5 year total return",
          },
        ].map(({ label, value, tooltip }) => (
          <Box
            key={label}
            display={"flex"}
            justifyContent={"space-between"}
            gap={1}
          >
            <Typography variant={"caption"} component={"p"}>
              {label}
            </Typography>
            <Box display={"flex"} gap={0.5} alignItems={"center"}>
              <Typography variant={"body2"} fontWeight={600}>
                {value}
              </Typography>
              <CustomTooltip title={tooltip}>
                <ErrorOutlineRounded
                  color={"warning"}
                  sx={{ fontSize: "16px", cursor: "pointer" }}
                />
              </CustomTooltip>
            </Box>
          </Box>
        ))}
      </Box>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <RHFTextField
            name={"amount"}
            placeholder={"1000"}
            type={"number"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">USD</InputAdornment>
              ),
            }}
          />
          <LoadingButton
            variant={"contained"}
            sx={{
              ...BUTTON_STYLES,
              p: 1,
              color: "common.white",
              borderColor: "text.heading",
              backgroundColor: "text.heading",
              width: 150,
              height: 58,
              ":hover": {
                backgroundColor: "text.heading",
              },
            }}
            disableElevation
            type={"submit"}
            loading={postAddPropertyToCardFromPropertyStatus?.isLoading}
          >
            Add To Cart
          </LoadingButton>
        </Box>
      </FormProvider>

      <Box
        display={"flex"}
        alignItems={"center"}
        p={1}
        gap={1}
        flexWrap={"wrap"}
      >
        {["+USD 2,000", "+USD 5,000", "+USD 10,000"].map((item: string) => (
          <Typography
            variant={"caption"}
            component={"p"}
            bgcolor={"primary.5"}
            px={1}
            py={0.6}
            borderRadius={1}
            key={item}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
