import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { checkDialogTypeForImage } from "./alert-dialog.data";
import CloseIcon from "@mui/icons-material/Close";
import { BUTTON_STYLES } from "@/styles";

const AlertDialog = (props: any) => {
  const {
    message,
    type,
    open,
    handleClose,
    handleCancelBtn = handleClose,
    handleSubmitBtn,
    cancelBtnText = "No",
    submitBtnText = "Yes",
    typeImage,
    loading,
  } = props;

  return (
    <Dialog
      open={open}
      onClose={() => handleClose?.()}
      fullWidth
      maxWidth={"sm"}
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: "secondary.900",
          p: 1,
          borderRadius: 5,
        },
      }}
    >
      <DialogTitle
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} gap={1}>
          {checkDialogTypeForImage(type) ?? typeImage}
          <Typography
            variant={"body1"}
            textTransform={"capitalize"}
            fontWeight={700}
            color={"text.heading"}
          >
            {type}
          </Typography>
        </Box>
        <CloseIcon
          sx={{ color: "text.body", cursor: "pointer" }}
          onClick={() => handleClose()}
        />
      </DialogTitle>
      <DialogContent>
        <Typography variant={"body1"} color={"text.heading"}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ pr: 2.4, pb: 2.4 }}>
        <Button
          variant={"outlined"}
          size={"small"}
          sx={{
            ...BUTTON_STYLES,
            color: "text.body",
            borderColor: "text.body",
            ":hover": {
              borderColor: "text.body",
            },
          }}
          onClick={() => handleCancelBtn()}
          disabled={loading}
        >
          {cancelBtnText}
        </Button>
        <LoadingButton
          variant={"contained"}
          size={"small"}
          sx={{
            ...BUTTON_STYLES,
            color: "common.white",
            borderColor: "error.main",
            backgroundColor: "error.main",
            ":hover": {
              backgroundColor: "error.main",
            },
          }}
          onClick={handleSubmitBtn}
          loading={loading}
        >
          {submitBtnText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
