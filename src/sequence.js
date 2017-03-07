import { Card, Filter, Rank,Suit, } from 'bee52';
const { bySuit, byRank, } = Filter;
const { sameSuit, rank, } = Card;
const { nextRank,rankVal, } = Rank;

export const hasNext = ({ rank,suit, }) => cards =>
  byRank(nextRank(rank))(cards).some(sameSuit({ suit, }));

export const rankDiff = (a,b) => rankVal(rank(a)) - rankVal(rank(b));
export const rankSort = cards => cards.sort(rankDiff);
export const nextBin = (cards,b) => hasNext(b)(cards);

// bySuit(suit)(cards).some(sameRank({ rank: nextRank(rank), }));
