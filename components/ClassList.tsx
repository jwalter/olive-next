import Spinner from "./spinner";
import { LiveOClient } from "../lib/liveo-client";

const ClassList = ({ id }: { id: string }) => {
  const { classes, isLoading } = new LiveOClient().useClassList(id);
  if (isLoading) return <Spinner />;

  const classItems = classes.map((clazz) => (
    <li key={clazz.id}>
        {clazz.date} 
        <div className="inline-block pl-2">
                <a>{clazz.className}</a>
        </div>
    </li>
  ));

  return <div>{classItems}</div>;
};

export default ClassList;
