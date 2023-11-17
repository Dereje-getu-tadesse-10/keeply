const { PrismaClient } = require('@prisma/client');
const { BackgroundColors } = require('@prisma/client');

const prisma = new PrismaClient();

const generateId = () => {
  return Math.random().toString(36).slice(2, 9);
};

const backgrounds = [
  {
    colorCode: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    name: 'Warm Flame',
    id: '1',
  },
  {
    colorCode: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    name: 'Night Fade',
    id: '2',
  },
  {
    colorCode: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
    name: 'Spring Warmth',
    id: '3',
  },
  {
    colorCode: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
    name: 'Juicy Peach',
    id: '4',
  },
];

async function main() {
  for (const background of backgrounds) {
    await prisma.backgroundColors.create({
      data: background,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    console.log('Error');
    process.exit(1);
  })
  .finally(async () => {
    console.log('ok');
    await prisma.$disconnect();
  });
