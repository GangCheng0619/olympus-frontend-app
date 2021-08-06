// import apollo from "../../lib/apolloClient";

// TODO: add paramaterization for testnet/mainnet pool ids
export const poolDataQuery = `
query {
  prizePool(id: "0x60bc094cb0c966e60ed3be0549e92f3bc572e9f8") {
    id
    owner
    deactivated
    currentPrizeId
    currentState
    cumulativePrizeGross
    cumulativePrizeNet
    liquidityCap
    prizeStrategy {
      multipleWinners {
        numberOfWinners
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
        externalErc20Awards {
          name
          symbol
          decimals
          balanceAwarded
        }
      }
    }
    prizes {
      id
      prizePeriodStartedTimestamp
      lockBlock
      awardedBlock
      awardedTimestamp
    }
    
    tokenCreditBalances {
      id
      balance
      timestamp
      initialized
    }
    controlledTokens {
      id
      name
      totalSupply
      numberOfHolders
    }
  }
  sablierStreams(first: 5) {
    id
    prizePool {
      id
    }
  }
}
`;

// for if we want to have multiple discrete queries
export const otherPoolDataQuery = `
query {
  
  }
}
`;

// export const poolData = () => apollo(poolDataQuery).then(r => r.data.protocolMetrics);
