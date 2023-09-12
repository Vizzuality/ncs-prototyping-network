import Card from '../card';
import { PROJECTS } from '../constants';

const MapView = ({}): JSX.Element => {
  return (
    <div>
      <div className="grid w-6/12 grid-cols-2 gap-3">
        {PROJECTS.map((project) => (
          <div key={project.id}>
            <Card data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapView;
