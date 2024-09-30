import { Dialog, DialogTitle } from "@mui/material";
import { ISignInDialogProps } from "./sign-in-dialog.interface";

export default function SignInDialog(props: ISignInDialogProps) {
  const { openDialog, setOpenDialog } = props;

  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <DialogTitle>Title</DialogTitle>
    </Dialog>
  );
}
