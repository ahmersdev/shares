import { Box, Typography } from "@mui/material";

export default function Market() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant={"h5"} fontWeight={800} color={"text.heading"}>
        About Market :
      </Typography>

      <Typography variant={"h7"}>
        Bali&rsquo;s property market remains a top choice for investors seeking
        property opportunities. With the pandemic now a thing of the past, the
        market is poised for a resurgence in demand. This is expected to rise in
        tandem with the island&rsquo;s tourist influx, further cementing
        Bali&rsquo;s appeal as a prime location for property investment.
      </Typography>

      <Typography variant={"h5"} fontWeight={800} color={"text.heading"}>
        About Ubud :
      </Typography>

      <Typography variant={"h7"}>
        Ubud is the cultural and craft center of Bali. In addition, it also
        presents vast natural beauty such as expansive green farmland, tourist
        villages, botanical gardens, forests with exotic animals, and various
        religious sites. This cultural heritage will always be a draw for
        thousands of local and international tourists every day who seek an
        experience far from the hustle and bustle of the city, along with its
        magical and serene aura. Seeing such rapid development, properties in
        the Ubud area also have attractive and positive prospects.
      </Typography>
    </Box>
  );
}
