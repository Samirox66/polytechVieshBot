const db = require('../config/db');

const addAdmin = async (ctx) => {

  const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.from.id}";`;
  const [isAdmin] = await db.execute(isAdminQuery);
  console.log(isAdmin);
  if (isAdmin.length) {
    ctx.reply('Вы уже админ');
    return;
  }

  const addToAdminsQuery = `INSERT INTO admins(
    telegram_id,
    first_name,
    second_name
    )
    VALUES("${ctx.from.id}", "${ctx.from.first_name}", "${ctx.from.last_name}");`;
  const addAdmin = await db.execute(addToAdminsQuery);
  console.log(addAdmin);
  ctx.reply(`${addAdmin.first_name} ${addAdmin.second_name}, стали админом`);
}

module.exports = addAdmin;