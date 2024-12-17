import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { IChatProps } from "../chat.interface";
import CloseIcon from "@mui/icons-material/Close";
import { ChangeEvent, useMemo, useState } from "react";
import { SearchIcon } from "@/assets/icons";
import { pxToRem } from "@/utils/get-font-value";
import { faqsData } from "../globals/faqs/faqs.data";
import AccordionsFaqs from "../globals/accordions-faqs";

export default function Help(props: IChatProps) {
  const { handleClose } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredAccordions = useMemo(() => {
    return faqsData
      .flatMap((content) => content.accordions || [])
      .filter((accordion) => {
        return (
          accordion.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          accordion.details.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
  }, [searchTerm]);

  return (
    <>
      <Box
        sx={{
          px: 1.6,
          py: 2.4,
          bgcolor: "common.bgChat",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box />
          <Typography variant={"body1"} fontWeight={700} color={"common.white"}>
            Help
          </Typography>
          <CloseIcon
            sx={{ color: "text.body", cursor: "pointer" }}
            onClick={() => handleClose()}
          />
        </Box>

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
            mt: 1.4,
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
      </Box>

      <Box
        sx={{
          height: {
            xs: "55vh",
            sm: "50vh",
          },
          overflow: "auto",
        }}
      >
        <Box sx={{ p: 1.6, borderBottom: 1, borderColor: "text.stroke" }}>
          <Typography
            variant={"caption"}
            fontWeight={600}
            color={"text.heading"}
          >
            {faqsData.length} Collections
          </Typography>
        </Box>

        <Box sx={{ p: 1.6 }}>
          {searchTerm ? (
            <>
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
            </>
          ) : (
            <>All Accordion</>
          )}
        </Box>
      </Box>
    </>
  );
}
