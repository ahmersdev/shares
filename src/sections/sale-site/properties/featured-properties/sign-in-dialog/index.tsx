import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
  Theme,
} from "@mui/material";
import { ISignInDialogProps } from "./sign-in-dialog.interface";
import SignInForm from "@/components/sign-in-form";

export default function SignInDialog(props: ISignInDialogProps) {
  const { openDialog, setOpenDialog } = props;

  const theme = useTheme<Theme>();

  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 6,
          border: 1,
          borderColor: "text.stroke",
          maxWidth: theme.breakpoints.values.sm - 150,
        },
      }}
    >
      <DialogTitle bgcolor={"primary.5"}>
        <Typography
          variant={"body1"}
          fontWeight={700}
          color={"text.heading"}
          textAlign={"center"}
        >
          To View The Property Details Please Log Into Your Account!
        </Typography>
      </DialogTitle>

      <DialogContent>
        <SignInForm mt={2} textAlign={"center"} />
      </DialogContent>
    </Dialog>
  );
}
