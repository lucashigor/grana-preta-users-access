import { FinancialPositionInterface } from '../../model/intefaces/FinancialPositionInterface'
import RepositoryBase = require ('./base/RepositoryBase')
import FinancialPositionSchema = require('../../model/schemas/FinancialPositionSchema');

class FinancialPositionRepository extends RepositoryBase<FinancialPositionInterface> {
  public constructor () {
    super(FinancialPositionSchema)
  }
}

Object.seal(FinancialPositionRepository)
export default new FinancialPositionRepository()
