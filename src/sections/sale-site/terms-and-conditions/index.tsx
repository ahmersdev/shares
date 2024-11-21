"use client";

import CustomHeroBanner from "@/components/custom-hero-banner";
import { LEGAL_PAGES } from "@/constants";
import { INavItem } from "@/interfaces";
import { pxToRem } from "@/utils/get-font-value";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import {
  ACCESS_AND_USE,
  CONTENT_GUIDELINES,
  LIMITED_LIABILITY,
  PERMITTED_USE,
  RISK_DISCLAIMER,
} from "./terms-and-conditions.data";
import LegalList from "@/components/legal-list";

export default function TermsAndConditions() {
  return (
    <Stack direction={"column"} spacing={5}>
      <CustomHeroBanner title={"Terms of Use"} />

      <Box display={"flex"} justifyContent={"center"} px={2} pb={5}>
        <Box position={"relative"} maxWidth={"lg"} width={"100%"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box>
                <Typography
                  variant={"caption"}
                  fontWeight={700}
                  color={"text.heading"}
                >
                  LEGAL
                </Typography>
                <List>
                  {LEGAL_PAGES.map((item: INavItem, index: number) => (
                    <ListItem
                      key={item.id}
                      sx={{ pl: 0, pt: index === 0 ? 0 : "default" }}
                    >
                      <ListItemButton
                        sx={{
                          fontSize: pxToRem(14),
                          background: "transparent",
                          p: 0,
                          "&:hover": {
                            background: "transparent",
                            color: "text.bodyLight",
                          },
                        }}
                      >
                        <Link href={item.href} style={{ width: "100%" }}>
                          {item.label}
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <Typography variant={"h5"} color={"text.heading"}>
                  Introduction
                </Typography>
                <Typography variant={"body2"}>
                  By using this website operated by Shares By Coco, you agree to
                  these Terms of Use, along with our Privacy Policy and Cookie
                  Policy. If you do not accept these terms, please stop using
                  the website immediately.
                  <br />
                  <br />
                  Shares By Coco provides information about real estate
                  investment opportunities. We are not financial or legal
                  advisors. It&rsquo;s your responsibility to consult a
                  professional before making any investment decisions.
                  <br />
                  <br />
                  We may update these terms, our website, or its content
                  anytime, and such changes take effect immediately. Please
                  check these terms regularly for updates.
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Permitted Use
                </Typography>
                <Typography variant={"body2"} component={"div"}>
                  You may only use this website for lawful purposes. You agree
                  not to:
                  <LegalList LIST_ARRAY={PERMITTED_USE} />
                  Any misuse may result in suspension or termination of your
                  access. Serious violations may be reported to legal
                  authorities.
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Content Guidelines
                </Typography>
                <Typography variant={"body2"} component={"div"}>
                  If you post or share any content, it must:
                  <LegalList LIST_ARRAY={CONTENT_GUIDELINES} />
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Disclaimer
                </Typography>
                <Typography variant={"body2"}>
                  Shares By Coco is not liable for any investment risks or
                  losses. Real estate investments are subject to market changes
                  and other uncertainties. Always review all information
                  carefully before making decisions.
                  <br />
                  <br />
                  By using this site, you agree to follow these Terms of Use.
                  For further details, refer to our full Privacy Policy or
                  contact us directly.
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Risk Disclaimer
                </Typography>
                <Typography variant={"body2"} component={"div"}>
                  Shares By Coco is a platform that connects you with property
                  investments offered by third parties. We don&rsquo;t own or
                  sell these properties, and the information on our website is
                  for general purposes only—it&rsquo;s not tailored advice or a
                  recommendation for any specific investment.
                  <br />
                  <br />
                  Important points to know:
                  <LegalList LIST_ARRAY={RISK_DISCLAIMER} />
                  Always consult a financial advisor before making investment
                  decisions. The information on this site isn&rsquo;t guaranteed
                  to be complete or error-free and shouldn&rsquo;t be your sole
                  basis for decisions.
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Access and Use
                </Typography>
                <Typography variant={"body2"} component={"div"}>
                  <LegalList LIST_ARRAY={ACCESS_AND_USE} />
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Third-Party Links
                </Typography>
                <Typography variant={"body2"}>
                  Our website may include links to third-party websites. We
                  don&rsquo;t control or guarantee their content and
                  aren&rsquo;t liable for issues arising from their use.
                  <br />
                  <br />
                  For more details, refer to our full terms and conditions.
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Limited Liability and User Responsibility
                </Typography>
                <Typography variant={"body2"} component={"div"}>
                  Using Shares By Coco is at your own risk. We are not liable
                  for:
                  <LegalList LIST_ARRAY={LIMITED_LIABILITY} />
                  If something is beyond our control, like technical issues or
                  external events, we cannot be held responsible. However, we
                  are still accountable for issues like fraud or personal injury
                  caused by negligence, as required by law.
                  <br />
                  <br />
                  You agree to compensate us if your actions or misuse of the
                  platform cause any loss, damage, or legal issues for us.
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Availability and Use of the Site
                </Typography>
                <Typography variant={"body2"}>
                  We provide access to the platform &quot;as is&quot; and
                  &quot;as available.&quot; We may restrict or withdraw access
                  at any time for legal, security, or maintenance reasons
                  without notice. If your use breaches our terms, we can suspend
                  or terminate your access.
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Intellectual Property
                </Typography>
                <Typography variant={"body2"}>
                  All content and materials on the site belong to us or our
                  licensors. You may not copy, distribute, or modify any part
                  without permission. Any ideas or suggestions you submit become
                  our property, though you retain rights over personal data as
                  per our Privacy Policy.
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Confidentiality
                </Typography>
                <Typography variant={"body2"}>
                  You must keep your login details private and not disclose any
                  confidential information you access through the platform.
                  Unauthorized sharing of information is strictly prohibited.
                </Typography>

                <Typography variant={"h5"} color={"text.heading"}>
                  Changes and Disputes
                </Typography>
                <Typography variant={"body2"}>
                  We may update these terms from time to time. Continued use of
                  the platform means you accept any changes. Disputes will be
                  governed by DIFC law and handled by DIFC courts.
                </Typography>
                <Typography variant={"body2"}>
                  For questions or concerns, contact us at{" "}
                  <Typography
                    variant={"body2"}
                    component={"span"}
                    fontWeight={600}
                  >
                    <Link
                      href={"mailto:hello@sharesbycoco.com"}
                      target="_blank"
                    >
                      hello@sharesbycoco.com
                    </Link>
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}
