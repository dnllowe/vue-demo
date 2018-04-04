'use strict'

import Company from "./Company"

type Contact = {
  [key: string]: number | string | Company
  id: number,
  name: string,
  company: Company
}

export default Contact