import { generateReactHelpers } from "@uploadthing/react";

import type { OurFileRouter } from "../../src/app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
