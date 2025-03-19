import { logger } from "@nanostores/logger";
import { $panels } from "./Navigation";

if(process.env.NODE_ENV === 'development') {
    logger({
      "PANELS STATE": $panels
    });
  }
  