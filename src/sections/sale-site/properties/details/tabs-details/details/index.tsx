import { Box, Typography } from "@mui/material";

export default function Details() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant={"h5"} fontWeight={800} color={"text.heading"}>
        About The Property
      </Typography>

      <Typography variant={"h7"}>
        Introducing Villa Lembah Giri, the newest gem in GORO&rsquo;s Bali
        properties list. This stylish three-bedroom villa, featuring
        contemporary tropical architecture, has been operational for several
        years. Located in the heart of Ubud, Villa Lembah Giri provides an
        unmatched sense of serenity. The villa was bought on a leasehold title
        until October 1, 2049 (~25 years).
        <br />
        <br />
        Villa Lembah Giri&rsquo;s strategic location near top tourist
        attractions ensures a consistent influx of visitors. The ease of access
        to Bali Zoo, Goa Gajah, and Monkey Forest makes it a highly desirable
        vacation rental, promising compelling returns on investment. This villa
        is designed to provide guests with an unforgettable experience while
        offering investors a reliable and profitable income stream.
        <br />
        <br />
        Perched on a 450-square-meter property with a 172-square-meter building
        area, Villa Lembah Giri exemplifies Balinese elegance. It offers three
        bedrooms, three bathrooms, a private infinity pool, and a lounge, all
        set against the backdrop of breathtaking natural views.
        <br />
        <br />
        Each of the three bedrooms exudes an enchanting ethnic theme, offering a
        relaxing garden view that enhances the villa&rsquo;s serene ambiance.
        The spacious, modern kitchen bar and living room provide the perfect
        setting for guests to enjoy culinary delights, and the semi-open living
        area seamlessly connects the indoors with the outdoors.
        <br />
        <br />
        Villa Lembah Giri&rsquo;s private infinity pool and cozy outdoor lounge
        are standout features - a secluded haven where guests can unwind and
        rejuvenate. Additionally, the villa has outdoor ethnic interior
        bathrooms, providing a unique and luxurious bathing experience under the
        open sky.
        <br />
        <br />
        Villa Lembah Giri presents as a promising investment choice, catering to
        both short-term and long-term rental prospects.
      </Typography>

      <Typography variant={"h5"} fontWeight={800} color={"text.heading"}>
        Management
      </Typography>

      <Typography variant={"h7"}>
        A professional management company has been appointed to manage the villa
        to optimise the returns.
      </Typography>

      <Typography variant={"h5"} fontWeight={800} color={"text.heading"}>
        Exit strategy:
      </Typography>

      <Typography variant={"h7"}>
        The villa will be sold once the leasehold reaches 21 years (October
        2028)
      </Typography>
    </Box>
  );
}
