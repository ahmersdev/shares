import { Box, Typography } from "@mui/material";
import { ourTeamData } from "./our-team.data";
import { IOurTeam } from "./our-team.interface";
import Image from "next/image";

export default function OurTeam() {
  return (
    <Box display={"flex"} justifyContent={"Center"} px={2} pb={5}>
      <Box maxWidth={"xl"} width={"100%"}>
        <Typography
          variant={"h4"}
          color={"text.heading"}
          textAlign={"center"}
          mb={4}
        >
          Meet Our Team
        </Typography>

        <Box
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"40px 64px"}
        >
          {ourTeamData.map((member: IOurTeam) => (
            <Box
              key={member.id}
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              height={"100%"}
              gap={0.6}
            >
              <Box border={8} borderColor={"primary.5"} borderRadius={"50%"}>
                <Image
                  src={member.img}
                  alt={member.name}
                  width={195}
                  height={195}
                />
              </Box>
              <Typography variant={"h5"} color={"text.heading"} mt={1}>
                {member.name}
              </Typography>
              <Typography
                variant={"body3"}
                component={"p"}
                fontWeight={600}
                color={"primary.main"}
              >
                {member.role}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
