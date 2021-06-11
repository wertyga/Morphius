import { gfErrors } from '../goldfish/gfErrors';

export const error = {
  accessDeny: {
    message: gfErrors.noAccess,
    status: 403,
  },
  notFound: {
    message: gfErrors.noData,
    status: 404,
  },
  wrongDataType: {
    message: gfErrors.wrongDataType,
    status: 400,
  },
};

export const getError = (
  type: keyof typeof error,
  path: string[] = []
): { error: { message: string; path: string[] }; status: number } => {
  return {
    error: { message: error[type].message, path },
    status: error[type].status,
  };
};
