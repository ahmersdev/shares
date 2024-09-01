import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import {
  IAccordion,
  ICustomAccordionProps,
} from "./custom-accordion.interface";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomAccordion({ accordions }: ICustomAccordionProps) {
  return (
    <>
      {accordions.map((accordion: IAccordion) => (
        <Accordion
          key={accordion.accordionId}
          sx={{
            bgcolor: "inherit",
            "&.Mui-expanded": {
              margin: 0,
            },
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant={"h7"} component={"p"} color={"text.body"}>
              {accordion.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant={"h7"} component={"p"} color={"text.heading"}>
              {accordion.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
