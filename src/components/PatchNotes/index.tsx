import Card from "./Card"
import { patchNotesContent } from "./patchnotesContent";

type Props = {}

const PatchNotesCard = (props: Props) => {
  return (
    <main className="flex justify-center mt-8">
      <div className='flex flex-wrap justify-center items-center gap-2'>
        {patchNotesContent.map((patchNotes) => (
          <Card key={patchNotes.title} patchNotes={patchNotes} />
        ))}
      </div>
    </main>
  );
};

export default PatchNotesCard