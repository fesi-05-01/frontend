interface Props {
  params: {
    id: string;
  };
}

export default function GatheringItemPage({ params }: Props) {
  return <div>Gathering {params.id} Page</div>;
}
