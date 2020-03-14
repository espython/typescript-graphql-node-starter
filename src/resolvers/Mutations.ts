import bcrypt from "bcryptjs";
import { MutationMap } from "../types/graphql-util";
import { User } from "../entity/User";

/**
 * Mutation files
 */
const Mutations: MutationMap = {
  register: async (
    _,
    { firstName, email, password }: GQL.IRegisterOnMutationArguments
  ) => {
    // Check if Email is already exist
    const userAlreadyExist = await User.findOne({
      where: { email },
      select: ["id"]
    });
    if (userAlreadyExist) {
      return [
        {
          path: "email",
          message: "email allready taken"
        }
      ];
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User.create({
      firstName,
      email,
      password: hashedPassword
    });

    await user.save();
    return null;
  }
};

export default Mutations;
