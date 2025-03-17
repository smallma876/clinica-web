import ClinicError from '../../../shared/clinic-error.ts/ClinicError';

const apiResource = 'patient';

const getPatient = async () => {
  const response = await fetch(`/cli-api/${apiResource}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new ClinicError({ statusCode: response.status, ...result });
};

export const PatientProxy = {
  getPatient,
};
