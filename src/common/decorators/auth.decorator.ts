import { SetMetadata } from '@nestjs/common';
import { GuardPermissionKey } from '../constants/constants';

export const Public = () => SetMetadata(GuardPermissionKey.PUBLIC, true);
