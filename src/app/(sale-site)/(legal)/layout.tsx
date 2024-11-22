import { IChildrenProps } from "@/interfaces";
import Legal from "@/layouts/sale-site/legal";

const LegalLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <Legal>{children}</Legal>
    </main>
  );
};

export default LegalLayout;
