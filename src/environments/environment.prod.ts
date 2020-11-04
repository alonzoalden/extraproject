
import { keys } from '../../environment-config';
export const environment = {
    production: true,
    // imageURL: keys.imageURL,
    // fileURL: keys.imageURL,
    imageURL: keys.imageURL,
    packageImageURL: keys.refurbishURL,
    refurbishURL: keys.refurbishURL,
    fileURL: keys.fileURL,
    bolURL: keys.bolURL,
    invoiceURL: keys.invoiceURL,
    linkURL: keys.linkURL,
    previewURL: keys.previewURL,
    siteURL: keys.siteURL,
    webapiURL: keys.webapiURL,
    authIssuer: keys.authIssuer,
    authclientId: keys.authclientId,
    hmr: false
};
