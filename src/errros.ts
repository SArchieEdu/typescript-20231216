throw "";

throw undefined;
throw null;

try {
} catch (error: unknown) {
  console.error(getErrorMessage(error));
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
}
