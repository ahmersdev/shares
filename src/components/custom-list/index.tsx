import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { pxToRem } from "@/utils/get-font-value";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { FC } from "react";
import Link from "next/link";
import { ICustomListProps } from "./custom-list.interface";

export const CustomList: FC<ICustomListProps> = ({ items }) => {
  const renderTextWithLink = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <Link
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "primary.main", textDecoration: "underline" }}
          >
            {part}
          </Link>
        );
      }
      return part;
    });
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem sx={{ py: 0, alignItems: "flex-start" }} key={index}>
          <ListItemIcon sx={{ minWidth: pxToRem(25), mt: 1.2 }}>
            <FiberManualRecordIcon
              sx={{ color: "text.heading", fontSize: "12px" }}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                {item.boldText && (
                  <Typography
                    component="span"
                    fontWeight={700}
                    sx={{ mr: 0.5 }}
                  >
                    {item.boldText}
                  </Typography>
                )}
                {renderTextWithLink(item.text)}
              </>
            }
            sx={{
              color: "text.heading",
              ".MuiTypography-root": {
                fontSize: pxToRem(18),
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};
