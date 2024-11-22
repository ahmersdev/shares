import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { pxToRem } from "@/utils/get-font-value";

export default function LegalList(props: {
  LIST_ARRAY: (string | JSX.Element)[];
}) {
  const { LIST_ARRAY } = props;

  return (
    <List>
      {LIST_ARRAY?.map((item, index) => (
        <ListItem key={index} sx={{ py: 0 }}>
          <ListItemIcon sx={{ minWidth: pxToRem(20) }}>
            <FiberManualRecordIcon
              sx={{ color: "inherit", fontSize: pxToRem(12) }}
            />
          </ListItemIcon>
          <ListItemText
            primary={item}
            sx={{
              color: "inherit",
              ".MuiTypography-root": {
                fontSize: pxToRem(16),
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
