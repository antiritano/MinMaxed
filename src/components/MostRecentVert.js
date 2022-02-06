const callouts = [
    {
      name: 'Review',
      description: 'Devil May Cry 5',
      imageSrc:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg?t=1637363400',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'Review',
      description: 'Resident Evil Village',
      imageSrc:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg?t=1640118086',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'Review',
      description: 'Monster Hunter Rise',
      imageSrc:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/capsule_616x353.jpg?t=1640223337',
      imageAlt: '',
      href: '#',
    },
    {
      name: 'Blog Post',
      description: 'How Dark Souls changed gaming',
      imageSrc:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7643695e-37e5-4fa7-8117-7caa9fe1d1ab/dcpyzj3-7f77aad0-5826-47fa-a145-d9478a9b3bb5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2NDM2OTVlLTM3ZTUtNGZhNy04MTE3LTdjYWE5ZmUxZDFhYlwvZGNweXpqMy03Zjc3YWFkMC01ODI2LTQ3ZmEtYTE0NS1kOTQ3OGE5YjNiYjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gnzld7nUWtvfxVkDg42s3PePVAQ_RIrRnJlVTEWsWqo',
      imageAlt: '',
      href: '#',
    },
  ];
  
  export default function MostRecentVert() {
    return (
      <div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-0 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Recent Articles
            </h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 ">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  