import { Patient } from '../../domain/patient';

export const PatientMock: Patient = {
  shippingReference: 'A LA ALTURA DE LA AVENIDA CANTO GRANDE 703 -',
  isPortalUser: 'true',
  documentType: '1',
  personMobilePhone: '966749033',
  phone: '966749033',
  guarantors: [
    {
      ruc: '20414955020',
      shortName: 'Rímac EPS',
      guarantorId: 'a2C3h000000IkyuEAC',
      guarantorCode: '20001',
    },
  ],
  termsAndConditionFlag: 'true',
  documentNumber: '44070821',
  names: 'SERGIO RUBEN',
  favoritesMedicals: '6838',
  investigations: 'false',
  clinicHistoryHis6: '14407082100',
  clinicHistoryHis5: '2779794',
  age: '38',
  promotionsFlag: '2',
  shippingDistrict: 'LURIGANCHO (CHOSICA)',
  gender: '2',
  maritalStatus: '6',
  clientCodeHis6: '2854632',
  lastName: 'MALLMA',
  lastName2: 'CHAVEZ',
  email: 'sergio.mallma876@gmail.com',
  domicileStreet: 'mz b lt 5 rio rimac sjl',
  isCuidate: 'false',
};
