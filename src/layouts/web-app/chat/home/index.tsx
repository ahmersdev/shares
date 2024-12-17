import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { IChatProps } from "../chat.interface";
import CloseIcon from "@mui/icons-material/Close";
import SendUsAMessage from "../globals/send-us-a-message";
import { useGetUserDetailsQuery } from "@/services/web-app/settings";
import { ChangeEvent, useMemo, useState } from "react";
import { SearchIcon } from "@/assets/icons";
import { pxToRem } from "@/utils/get-font-value";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IAccordionData } from "../globals/faqs/faqs.interface";
import { faqsData } from "../globals/faqs/faqs.data";
import AccordionsFaqs from "../globals/accordions-faqs";

export default function Home(props: IChatProps) {
  const { handleClose } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Extract all accordions into a single array
  const allAccordions: IAccordionData[] = useMemo(() => {
    return faqsData.flatMap((faq) => faq.accordions || []);
  }, []);

  // Filter accordions based on search term
  const filteredAccordions = useMemo(() => {
    return allAccordions.filter(
      (accordion) =>
        accordion.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        accordion.details.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allAccordions]);

  const { data } = useGetUserDetailsQuery(null);

  return (
    <>
      <Box
        sx={{
          px: 1.6,
          py: 2.4,
          bgcolor: "common.bgChat",
          height: { xs: "40vh", sm: "35vh" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography variant={"logo"} color={"common.bgLight"}>
              Shares
            </Typography>
            <Box
              width={7}
              height={7}
              bgcolor={"primary.main"}
              borderRadius={"50%"}
            />
          </Box>
          <CloseIcon
            sx={{ color: "text.body", cursor: "pointer" }}
            onClick={() => handleClose()}
          />
        </Box>

        <Box sx={{ mt: { xs: "10vh", sm: "8vh" } }}>
          <Typography variant={"h5"} color={"text.body"}>
            Hi {data?.data?.fullName ?? "---"}
          </Typography>
          <Typography variant={"h5"} color={"common.white"} mb={2.4}>
            How Can We Help You?
          </Typography>
          <SendUsAMessage
            sxProps={{
              ".MuiInputBase-root": {
                bgcolor: "common.white",
                borderRadius: 3,
                borderColor: "text.bodyLight",
                "& ::placeholder": {
                  color: "text.disabled",
                },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            height: { xs: "35vh", sm: "30vh" },
            border: 1,
            mt: 1,
            borderRadius: 3,
            borderColor: "text.stroke",
            bgcolor: "common.white",
            p: 1,
            overflow: "auto",
          }}
        >
          <TextField
            variant={"outlined"}
            placeholder={"Search For Articles"}
            value={searchTerm}
            onChange={handleInputChange}
            fullWidth
            inputProps={{
              style: {
                color: "text.heading",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon width={"16"} height={"16"} />
                </InputAdornment>
              ),
            }}
            sx={{
              ".MuiInputBase-root": {
                borderRadius: 2,
                height: 38,
                fontWeight: 600,
                fontSize: pxToRem(10),
                bgcolor: "common.bgLight",
                borderColor: "text.stroke",
                "& ::placeholder": {
                  color: "text.heading",
                },
              },
            }}
          />

          {filteredAccordions.length ? (
            <AccordionsFaqs filteredAccordions={filteredAccordions} />
          ) : (
            <Typography
              variant={"caption"}
              color={"error.main"}
              textAlign={"center"}
            >
              No Information Available, try talking to us instead!
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
