import { NextFunction, Request, Response } from "express";

type AsyncController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

const catchErrors =
  (controller: AsyncController): AsyncController =>
  async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default catchErrors;

// Usage:

// import catchErrors from './catchErrors';

// const myController: AsyncController = async (req, res) => {
// // your code here
// throw new Error('Something went wrong');
// };

// app.get('/api/users', catchErrors(myController));

// This middleware will catch any errors thrown in the controller and send a JSON response with status code 500.

// Note: This middleware should be used after all other middleware functions. If you want to handle errors in other middleware functions, you should wrap them in a try-catch block and call next(error) instead of throwing an error.

// Note: If you want to handle specific types of errors differently, you can create separate catchErrors functions for each type of error. For example, one for validation errors and another for database errors.
