import { MongoHelper } from '../helpers/mongo-helper'

interface AccountModel {
  id: string
  name: string
  email: string
  password: string
}
interface AddAccountModel {
  name: string
  email: string
  password: string
}
interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountColletion = await MongoHelper.getCollection('accounts')
    const result = await accountColletion.insertOne(accountData)
    return MongoHelper.map(result.ops[0])
  }
}
