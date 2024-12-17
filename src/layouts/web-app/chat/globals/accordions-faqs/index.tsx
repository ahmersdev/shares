import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IAccordionData } from "../faqs/faqs.interface";

export default function AccordionsFaqs({
  filteredAccordions,
}: {
  filteredAccordions: IAccordionData[];
}) {
  return (
    <>
      {filteredAccordions.map((accordion: IAccordionData, index: number) => (
        <Accordion
          key={index}
          sx={{
            bgcolor: "inherit",
            boxShadow: "none",
            "&.Mui-expanded": {
              margin: 0,
            },
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }}>
            <Typography
              variant={"caption"}
              fontWeight={600}
              color={"text.heading"}
            >
              {accordion.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <Typography variant={"caption"} component={"p"} color={"text.body"}>
              {accordion.details}
            </Typography>
            {accordion.additionalContent}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
