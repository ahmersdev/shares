"use client";

import { useState } from "react";
import KycState from "./kyc-state";
import AgreementState from "./agreement-state";

export default function KycVerification() {
  const [kycState, setKycState] = useState(true);

  return (
    <>
      {kycState ? <KycState setKycState={setKycState} /> : <AgreementState />}
    </>
  );
}
