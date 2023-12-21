package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "github.com/cifer-ai/cifer/testutil/keeper"
	"github.com/cifer-ai/cifer/x/cifer/types"
)

func TestParamsQuery(t *testing.T) {
	keeper, ctx := keepertest.CiferKeeper(t)
	params := types.DefaultParams()
	require.NoError(t, keeper.SetParams(ctx, params))

	response, err := keeper.Params(ctx, &types.QueryParamsRequest{})
	require.NoError(t, err)
	require.Equal(t, &types.QueryParamsResponse{Params: params}, response)
}
