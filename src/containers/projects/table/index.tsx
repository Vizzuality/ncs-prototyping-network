import Image from 'next/image';

import { PROJECTS } from '../constants';

const ProjectTable = ({}): JSX.Element => {
  return (
    <>
      {PROJECTS.length > 0 && (
        <table className="text-xs">
          <thead className="h-12">
            <tr className="text-left font-semibold [&>*]:px-4 [&>*]:py-2">
              <th></th>
              <th>Pathway</th>
              <th>Action Type</th>
              <th>Project Phase</th>
              <th>Project Category</th>
              <th>Area Impacted</th>
              <th>People supported</th>
              <th>Mitigation Potencial</th>
              <th>Co-benefits</th>
            </tr>
          </thead>
          <tbody className="[&>*]:h-10">
            {PROJECTS.map((project) => {
              return (
                <tr key={project.id} className="text-text [&>*]:px-4 [&>*]:py-2">
                  <td className="flex space-x-2">
                    <Image alt={project.country} src={project.image} width={100} height={100} />
                    <div className="flex flex-col">
                      <p className="font-serif text-xl text-indigo">{project.country}</p>
                      <p className="max-w-xs">{project.description}</p>
                    </div>
                  </td>
                  <td>{project.pathway}</td>
                  <td>{project.action}</td>
                  <td>{project.phase}</td>
                  <td>
                    <div className="flex flex-col">
                      {project.categories.map((category) => (
                        <span key={category} className="mr-2">
                          {category}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>{project.area}</td>
                  <td>{project.people}</td>
                  <td>{project.mitigation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ProjectTable;
