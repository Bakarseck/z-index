# Makefile for managing a Next.js and Prisma project

# Start the development server
dev:
	npx next dev

install:
	@npm install

# Build the production version
build:
	npx next build

# Start the production server
start:
	npx next start

move:
	mv ~/Downloads/$(name).png public/assets

# Generate Prisma client
prisma-generate:
	npx prisma generate

# Migrate database in development
migrate-dev:
	npx prisma migrate dev --name auto_migration

# Push the schema state to the database without creating a migration file
db-push:
	npx prisma db push

# Launch Prisma Studio
studio:
	npx prisma studio

# Clean .next build directory
clean:
	rm -rf .next

# Help
help:
	@echo "Makefile commands:"
	@echo "  dev             Start the development server"
	@echo "  build           Build the production version"
	@echo "  start           Start the production server"
	@echo "  prisma-generate Generate Prisma client"
	@echo "  migrate-dev     Migrate database in development"
	@echo "  db-push         Push schema state to the database"
	@echo "  studio          Launch Prisma Studio"
	@echo "  clean           Clean .next build directory"
	@echo "  help            Display this help message"

.PHONY: dev build start prisma-generate migrate-dev migrate-prod db-push studio clean help
