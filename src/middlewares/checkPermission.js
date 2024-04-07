import { errorMessages } from "../constants/message";

export const checkPermission = (roles) => (req, res, next) => {

  const hashPermission = roles.some((role) => req.user.roles.includes(role));
  if (!hashPermission) {
    return res.status(403).json({
      message: errorMessages.PERMISSION_DENIED,
    });
  }
  next();
};