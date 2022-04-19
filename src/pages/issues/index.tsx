import Board from "../../components/board";
import IssueCard from "../../components/issueCard";
import Header from "../../components/issues/header";

const Issues = () => {
  return (
    <>
      <Header />
      <div className="flex space-x-3 overflow-auto p-3">
        <Board>
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </Board>
        <Board>
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </Board>
        <Board>
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </Board>
        <Board>
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </Board>
      </div>
    </>
  );
};

export default Issues;
