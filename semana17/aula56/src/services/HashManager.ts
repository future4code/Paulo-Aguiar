import * as bcrypt from "bcryptjs";

export default class HashManager {
  public async encrypt(source: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const hash = await bcrypt.hash(source, salt);

    return hash
  }

  public async verify(source: string, hash: string): Promise<boolean> {
    return bcrypt.compare(source, hash)
  }

}