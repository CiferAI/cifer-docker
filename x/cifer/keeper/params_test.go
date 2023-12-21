package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "github.com/cifer-ai/cifer/testutil/keeper"
	"github.com/cifer-ai/cifer/x/cifer/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.CiferKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
