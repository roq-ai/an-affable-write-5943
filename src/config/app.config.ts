interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Author'],
  customerRoles: [],
  tenantRoles: ['Author', 'Editor', 'Marketing Manager', 'Reader'],
  tenantName: 'Author',
  applicationName: 'An Affable writer',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage author information',
    'Create new author entries',
    'Edit existing author entries',
    'Delete author entries',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5f339c96-d852-4bff-a432-d8525d424450',
};
