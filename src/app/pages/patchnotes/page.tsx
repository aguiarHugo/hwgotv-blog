import PatchNotesCard from "./PatchNotesCard";
import { patchContent } from "./patchContent";

type Props = {};

const PatchNotesPage: React.FC<Props> = () => {
  return (
    <section className="mt-16 pt-12 md:mt-24">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl text-center sm:text-5xl">Patch Notes</h1>
          <p className="text-center">Confira todos os patch notes</p>
        </div>
        <div className="flex items-center gap-3 mt-8 mb-4">
          <h4 className="bg-patchnotes-100 py-2 px-4 w-32 text-center font-bold">
            Patch Notes
          </h4>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-8">
          {patchContent.map((patch, index) => (
            <PatchNotesCard key={index} patch={patch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatchNotesPage;
